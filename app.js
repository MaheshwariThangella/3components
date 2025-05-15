document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('product-list');

  const card1 = createCard("Product A", "This is a cool product.", "images/sample-product.jpg");
  const card2 = createFeaturedCard("Product B", "Featured and awesome!", "images/sample-product.jpg");
  const card3 = createSaleCard("Product C", "On Sale now!", "images/sample-product.jpg");

  container.appendChild(card1);
  container.appendChild(card2);
  container.appendChild(card3);

  const showModalBtn = createPrimaryButton("Show Info", () => {
    createModal("This is a demo modal popup!");
  });

  const alertBtn = createDangerButton("Alert", () => {
    alert("This is an alert button!");
  });

  const logBtn = createSecondaryButton("Log Message", () => {
    console.log("You clicked the log button!");
  });

  document.body.appendChild(showModalBtn);
  document.body.appendChild(alertBtn);
  document.body.appendChild(logBtn);
});
