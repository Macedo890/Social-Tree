const input = document.querySelector(".profile-input");
const profile = document.querySelector(".profile-image");

input.addEventListener("change", () => {
  const profile_data = URL.createObjectURL(input.files[0]);
  sessionStorage.setItem("data", profile_data);

  profile.src = sessionStorage.getItem("data");
});

document.addEventListener("DOMContentLoaded", () => {
  profile.src = sessionStorage.getItem("data");
});
