// Parse query parameters
const params = new URLSearchParams(window.location.search);

// Set content
document.getElementById('project-title').innerText = params.get('title');
document.getElementById('project-description').innerText = params.get('desc');


// Set GitHub link
document.getElementById('github-link').href = params.get('github');

// Handle video embedding (Google Drive or YouTube)
const videoUrl = params.get('video');
const videoFrame = document.getElementById('demo-video');

if (videoUrl) {
  if (videoUrl.includes("drive.google.com")) {
    // Extract file ID from Google Drive link
    const fileIdMatch = videoUrl.match(/\/d\/(.*?)(\/|$)/);
    const fileId = fileIdMatch ? fileIdMatch[1] : null;
    if (fileId) {
      videoFrame.src = `https://drive.google.com/file/d/${fileId}/preview`;
    } else {
      document.getElementById('video-container').innerHTML = "<p style='color:red;'>Invalid Google Drive link.</p>";
    }
  } else if (videoUrl.includes("youtu")) {
    // Handle YouTube links
    const videoId = videoUrl.split("v=")[1] || videoUrl.split("/").pop();
    videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
  } else {
    document.getElementById('video-container').innerHTML = "<p style='color:red;'>Unsupported video link.</p>";
  }
}

// Set links
document.getElementById('github-link').href = params.get('github');

// Optional: Add feature list
const featuresParam = params.get('features'); // comma-separated
if (featuresParam) {
  const features = featuresParam.split(',');
  const ul = document.getElementById('project-features');
  features.forEach(feature => {
    const li = document.createElement('li');
    li.innerText = feature.trim();
    ul.appendChild(li);
  });
}
