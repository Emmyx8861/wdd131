document.addEventListener("DOMContentLoaded", () => {
  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  const lastModifiedParagraph = document.getElementById("last-modified");
  if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
  }

  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector("nav");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      menuToggle.classList.toggle("open");

      if (menuToggle.classList.contains("open")) {
        menuToggle.innerHTML = "&times;";
      } else {
        menuToggle.innerHTML = "&#9776;";
      }
    });
  }

  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Salt Lake",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 382207,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-temple/400x250/salt-lake-temple-37132.jpg"
    },
    {
      templeName: "Frankfurt Germany",
      location: "Friedrichsdorf, Germany",
      dedicated: "1987, August, 28",
      area: 32895,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/400x250/frankfurt-germany-temple-1130317.jpg"
    },
    {
      templeName: "Johannesburg South Africa",
      location: "Johannesburg, South Africa",
      dedicated: "1985, August, 24",
      area: 19184,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
    }
  ];

  const templeContainer = document.querySelector("main");

  function createTempleImage(temple) {
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    img.onerror = () => {
      // Prevent infinite loop if the placeholder itself fails
      img.onerror = null;
      img.src = "images/placeholder.webp";
      img.alt = `${temple.templeName} (image unavailable)`;
    };

    return img;
  }

  function displayTemples(filteredTemples) {
    if (!templeContainer) return;

    const heading = templeContainer.querySelector("h1");
    templeContainer.innerHTML = "";
    if (heading) {
      templeContainer.appendChild(heading);
    }

    filteredTemples.forEach(temple => {
      const card = document.createElement("section");
      card.classList.add("temple-card");

      card.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p><span class="label">Location:</span> ${temple.location}</p>
        <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
        <p><span class="label">Size:</span> ${temple.area} sq ft</p>
      `;

      // Append image via DOM method so onerror fires correctly
      card.appendChild(createTempleImage(temple));

      templeContainer.appendChild(card);
    });
  }

  displayTemples(temples);

  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      const filterType = link.textContent.trim().toLowerCase();
      let result = [];

      switch (filterType) {
        case "old":
          result = temples.filter(t => {
            const year = parseInt(t.dedicated.split(",")[0]);
            return year < 1900;
          });
          break;
        case "new":
          result = temples.filter(t => {
            const year = parseInt(t.dedicated.split(",")[0]);
            return year > 2000;
          });
          break;
        case "large":
          result = temples.filter(t => t.area > 90000);
          break;
        case "small":
          result = temples.filter(t => t.area < 10000);
          break;
        default:
          result = temples;
          break;
      }

      displayTemples(result);
    });
  });
});