var siteURLInput = document.getElementById("siteURLInput");
var siteNameInput = document.getElementById("siteNameInput");
var addUpdatesite = document.getElementById("addUpdatesite");
var siteArray = [];

function addsite() {
  var site = {
    name: siteNameInput.value.trim(),
    url: siteURLInput.value.trim(),
  };

var nameRegExp = /^[A-Za-z][\w\s-]{2,29}$/;
var urlRegExp = /^https?:\/\/.+\.com$/; 


  if (!nameRegExp.test(site.name)) {
    alert("Site name must start with a letter and be 4 to 30 characters long.");
    return;
  }

  if (!urlRegExp.test(site.url)) {
    alert("Please enter a valid URL starting with http:// or https://");
    return;
  }
  siteArray.push(site);
  localStorage.setItem("sites", JSON.stringify(siteArray));
  displaysites();
  clearForm();
}

function displaysites() {
  var trs = "";
  for (var i = 0; i < siteArray.length; i++) {
    trs += `<tr>
                            <td>${i + 1}</td>
                            <td>${siteArray[i].name}</td>
                            <td>
                                <a href="${
                                  siteArray[i].url
                                }" target="_blank" class="btn btn-primary btn-sm">
                                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Visit
                                </a>
                            </td>
                            <td>
                                <button class="btn btn-danger btn-sm" onclick="deletesite(${i})">Delete</button>
                            </td>
                        </tr>`;
  }
  document.getElementById("tableContent").innerHTML = trs;
}

function deletesite(index) {
  siteArray.splice(index, 1);
  localStorage.setItem("sites", JSON.stringify(siteArray));
  displaysites();
}

function clearForm() {
  siteNameInput.value = "";
  siteURLInput.value = "";
}

displaysites();


