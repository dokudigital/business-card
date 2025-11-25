const cardTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{name}} - Digital Business Card</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

  <style>
    body {
      background: #f5f5f5;
      padding: 20px;
    }
    .card-wrapper {
      max-width: 420px;
      margin: auto;
    }
    .profile-img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 50%;
      border: 4px solid #fff;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .logo-img {
      max-width: 140px;
      height: auto;
    }
    .social-icons a {
      font-size: 1.4rem;
      margin: 0 10px;
      text-decoration: none;
    }
  </style>

</head>
<body>

<div class="card-wrapper">

  <div class="card shadow-lg p-4 rounded-4 text-center">

    ${data.logo ? `<img src="${data.logo}" class="logo-img mb-3">` : ""}
${data.photo ? `<img src="${data.photo}" class="profile-img mb-3">` : ""}


    <h4 class="fw-bold mb-1">{{name}}</h4>
    <p class="text-muted mb-3">{{title}}</p>

    <p class="mb-3">{{description}}</p>

    ${(data.website || data.linkedin || data.instagram || data.facebook) ? `
  <div class="social-icons mb-4">
    ${data.website ? `<a href="${data.website}" target="_blank">🌐</a>` : ""}
    ${data.linkedin ? `<a href="${data.linkedin}" target="_blank">💼</a>` : ""}
    ${data.instagram ? `<a href="${data.instagram}" target="_blank">📸</a>` : ""}
    ${data.facebook ? `<a href="${data.facebook}" target="_blank">🔗</a>` : ""}
  </div>
` : ""}


    ${(data.phone || data.whatsapp || data.email) ? `
  <div class="d-grid gap-2">
    ${data.phone ? `<a href="tel:${data.phone}" class="btn btn-primary py-2">Call Me</a>` : ""}
    ${data.whatsapp ? `<a href="https://wa.me/${data.whatsapp}" class="btn btn-success py-2">WhatsApp</a>` : ""}
    ${data.email ? `<a href="mailto:${data.email}" class="btn btn-dark py-2">Email</a>` : ""}
  </div>
` : ""}


  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
`;
