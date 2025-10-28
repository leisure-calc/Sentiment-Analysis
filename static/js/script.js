// const textInput = document.getElementById("message")
// const analyzeBtn = document.getElementById("analyzeBtn")
// const charCount = document.getElementById("charCount")
// const resultsSection = document.getElementById("resultsSection")
// const errorSection = document.getElementById("errorSection")
// const analysisForm = document.getElementById("analysisForm")

// // Emotion configuration
// const emotionConfig = {
//   anger: { emoji: "🤬", color: "#ff4757", description: "Strong negative emotion detected" },
//   disgust: { emoji: "🤢", color: "#2ed573", description: "Repulsion or aversion detected" },
//   fear: { emoji: "😨", color: "#9c27b0", description: "Anxiety or concern detected" },
//   joy: { emoji: "😀", color: "#ffa502", description: "Happiness and positivity detected" },
//   neutral: { emoji: "😐", color: "#6c757d", description: "No strong sentiment detected" },
//   sadness: { emoji: "😭", color: "#0984e3", description: "Melancholy or sorrow detected" },
//   surprise: { emoji: "😲", color: "#ff6348", description: "Astonishment or shock detected" },
// }

// // Character counter
// textInput.addEventListener("input", (e) => {
//   charCount.textContent = e.target.value.length
// })

// analysisForm.addEventListener("submit", (e) => {
//   // Don't prevent default - let the form submit normally to Flask
//   analyzeBtn.disabled = true
//   analyzeBtn.classList.add("loading")
// })

// let flaskData // Declare the variable before using it
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("[v0] DOMContentLoaded fired, flaskData:", flaskData)

//   // Check if flaskData has valid results (label and score should not be null)
//   if (flaskData && flaskData.label && flaskData.score !== null && flaskData.list && flaskData.list.length > 0) {
//     console.log("[v0] Valid flaskData found, displaying results")
//     const data = convertFlaskDataToResult(flaskData)
//     displayResults(data, textInput.value)

//     // Scroll to results
//     setTimeout(() => {
//       resultsSection.scrollIntoView({ behavior: "smooth", block: "start" })
//     }, 100)
//   } else {
//     console.log("[v0] No valid flaskData, hiding results section")
//     resultsSection.style.display = "none"
//   }
// })

// function convertFlaskDataToResult(flaskData) {
//   const emotionScores = {}

//   // Map the list of emotion objects to a scores object
//   if (Array.isArray(flaskData.list) && flaskData.list.length > 0) {
//     flaskData.list.forEach((item) => {
//       const emotion = item.label.toLowerCase()
//       emotionScores[emotion] = Number.parseFloat(item.score.toFixed(2))
//     })
//   }

//   // Ensure all emotions are present
//   const allEmotions = ["anger", "disgust", "fear", "joy", "neutral", "sadness", "surprise"]
//   allEmotions.forEach((emotion) => {
//     if (!emotionScores[emotion]) {
//       emotionScores[emotion] = 0
//     }
//   })

//   return {
//     emotion: flaskData.label.toLowerCase(),
//     score: Number.parseFloat(flaskData.score.toFixed(2)),
//     ...emotionScores,
//   }
// }

// function displayResults(data, originalText) {
//   const emotion = data.emotion.toLowerCase()
//   const score = Number.parseFloat(data.score)

//   // Validate emotion
//   if (!emotionConfig[emotion]) {
//     showError("Invalid emotion returned from API")
//     return
//   }

//   const config = emotionConfig[emotion]

//   // Update emotion display
//   document.getElementById("emotionIcon").textContent = config.emoji
//   document.getElementById("emotionName").textContent = emotion.charAt(0).toUpperCase() + emotion.slice(1)
//   document.getElementById("emotionDescription").textContent = config.description

//   // Update score slider and value
//   const scorePercentage = Math.round(score * 100)
//   document.getElementById("scoreSlider").value = scorePercentage
//   document.getElementById("scoreValue").textContent = score.toFixed(2)

//   // Update emotion breakdown
//   updateEmotionBreakdown(data)

//   // Update analyzed text
//   document.getElementById("analyzedText").textContent = originalText

//   // Show results
//   resultsSection.style.display = "block"
//   errorSection.style.display = "none"
// }

// function updateEmotionBreakdown(data) {
//   const emotionItems = document.querySelectorAll(".emotion-item")

//   emotionItems.forEach((item) => {
//     const emotion = item.dataset.emotion
//     const score = Number.parseFloat(data[emotion] || 0)
//     const percentage = Math.round(score * 100)

//     const fillBar = item.querySelector(".emotion-item-fill")
//     const scoreDisplay = item.querySelector(".emotion-item-score")

//     fillBar.style.width = percentage + "%"
//     scoreDisplay.textContent = score.toFixed(2)
//   })
// }

// function showError(message) {
//   document.getElementById("errorMessage").textContent = message
//   errorSection.style.display = "block"
//   resultsSection.style.display = "none"

//   setTimeout(() => {
//     errorSection.scrollIntoView({ behavior: "smooth", block: "start" })
//   }, 100)
// }

// function resetAnalysis() {
//   textInput.value = ""
//   charCount.textContent = "0"
//   resultsSection.style.display = "none"
//   errorSection.style.display = "none"
//   textInput.focus()
// }
