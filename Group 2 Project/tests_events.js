/* JavaScript */
// Get the SVG map element
const africaMap = document.getElementById('africa-map');

// Highlight the countries
const highlightCountries = ['Algeria', 'Angola', 'Botswana', 'Democratic Republic of the Congo', 'Egypt', 'Ethiopia', 'Gabon', 'Ghana', 'Kenya', 'Liberia', 'Madagascar', 'Malawi', 'Morocco', 'Mozambique', 'Namibia', 'Nigeria', 'Rwanda', 'Senegal', 'Sierra Leone', 'South Africa', 'Tanzania', 'Uganda', 'Zambia', 'Zimbabwe'];

for (const country of highlightCountries) {
  // Get the country path element
  const countryPath = africaMap.querySelector(`path[title="${country}"]`);

  // Set the fill color of the country path
  countryPath.style.fill = '#ffff00';

  // Add a hover event listener to the country path
  countryPath.addEventListener('mouseover', () => {
    // Change the fill color of the country path to a lighter shade
    countryPath.style.fill = '#ffff80';
  });

  // Add a mouseout event listener to the country path
  countryPath.addEventListener('mouseout', () => {
    // Change the fill color of the country path back to the original color
    countryPath.style.fill = '#ffff00';
  });

  // Display the callout for the country
  const callout = document.querySelector('.callout');
  callout.style.display = 'block';

  // Set the country name in the callout
  const countryNameElement = document.querySelector('#country-name');
  countryNameElement.textContent = country;
}
