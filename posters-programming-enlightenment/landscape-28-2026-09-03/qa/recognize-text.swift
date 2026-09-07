// Read-only OCR with Apple's Vision. Generates no image and never changes poster pixels.
import Foundation
import Vision
import ImageIO

struct OCRResult: Codable {
    let file: String
    let lines: [String]
    let minimumConfidence: Float
    let error: String?
}

let arguments = CommandLine.arguments.dropFirst()
var results: [OCRResult] = []
for argument in arguments {
    let url = URL(fileURLWithPath: argument)
    let request = VNRecognizeTextRequest()
    request.recognitionLevel = .accurate
    request.recognitionLanguages = ["zh-Hans", "en-US"]
    request.usesLanguageCorrection = false
    request.minimumTextHeight = 0.008
    do {
        try VNImageRequestHandler(url: url, options: [:]).perform([request])
        let candidates = (request.results ?? []).compactMap { $0.topCandidates(1).first }
        results.append(OCRResult(file: url.lastPathComponent, lines: candidates.map { $0.string }, minimumConfidence: candidates.map { $0.confidence }.min() ?? 0, error: nil))
    } catch {
        results.append(OCRResult(file: url.lastPathComponent, lines: [], minimumConfidence: 0, error: String(describing: error)))
    }
}
let encoder = JSONEncoder()
encoder.outputFormatting = [.prettyPrinted, .sortedKeys, .withoutEscapingSlashes]
let data = try encoder.encode(results)
FileHandle.standardOutput.write(data)
FileHandle.standardOutput.write(Data([10]))
