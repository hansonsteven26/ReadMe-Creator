function renderLicenseBadge(license) {
  let badge = "";

  switch (license) {
    case "GNU AGPLv3":
      badge = "GNU_AGPLv3-violet";
      break;

    case "GNU GPLv3":
      badge = "GPL_3.0-green";
      break;

    case "GNU LGPLv3":
      badge = "LGPL_3.0-yellow";
      break;

    case "Mozilla Public License 2.0":
      badge = "MPPL_2.0-orange";
      break;

    case "Apache License 2.0":
      badge = "APACHE_2.0-red";
      break;

    case "MIT License":
      badge = "MIT-blueviolet";
      break;

    case "Boost Software License 1.0":
      badge = "BSL_1.0-blue";
      break;

    case "The Unlicense":
      badge = "Unlicense-violet";
      break; 
  }

  return `https://img.shields.io/badge/${badge}`

}

function renderLicenseLink(license) {
  let urlPath = "";

  switch (license) {
    case "GNU AGPLv3":
      urlPath = "agpl-3.0";
      break;

    case "GNU GPLv3":
      urlPath = "gpl-3.0";
      break;

    case "GNU LGPLv3":
      urlPath = "lgpl-3.0";
      break;

    case "Mozilla Public License 2.0":
      urlPath = "mpl-2.0";
      break;

    case "Apache License 2.0":
      urlPath = "apache-2.0";
      break;

    case "MIT License":
      urlPath = "mit";
      break;

    case "Boost Software License 1.0":
      urlPath = "bsl-1.0";
      break;

    case "The Unlicense":
      urlPath = "unlicense";
      break;  
  }

  return `https://choosealicense.com/licenses/${urlPath}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  let licenseBadge = renderLicenseBadge(response);
  let licenseURL = renderLicenseLink(response);
  return `![Static badge](${licenseBadge}) Click [here](${licenseURL}) for more info on the license.`;
}

module.exports = generateMarkdown;
