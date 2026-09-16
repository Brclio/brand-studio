import Foundation
import Vision
import AppKit

// Read-only OCR for the generated posters; does not alter any image.
let root = URL(fileURLWithPath: CommandLine.arguments[1])
var output: [[String: Any]] = []
for group in ["material-series", "esther-series"] {
    let directory = root.appendingPathComponent(group)
    let files = try FileManager.default.contentsOfDirectory(at: directory, includingPropertiesForKeys: nil)
        .filter { $0.pathExtension == "png" }.sorted { $0.lastPathComponent < $1.lastPathComponent }
    for file in files {
        let request = VNRecognizeTextRequest()
        request.recognitionLevel = .accurate
        request.recognitionLanguages = ["zh-Hans", "en-US"]
        request.usesLanguageCorrection = false
        try VNImageRequestHandler(url: file).perform([request])
        let lines = (request.results ?? []).compactMap { observation -> [String: Any]? in
            guard let candidate = observation.topCandidates(1).first else { return nil }
            return ["text": candidate.string, "confidence": candidate.confidence]
        }
        output.append(["file": group + "/" + file.lastPathComponent, "lines": lines])
    }
}
let data = try JSONSerialization.data(withJSONObject: output, options: [.prettyPrinted, .sortedKeys, .withoutEscapingSlashes])
FileHandle.standardOutput.write(data)
