// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    const ratingInputs = form.querySelectorAll("input[name='review[rating]']");
    Array.from(ratingInputs).forEach((input) => {
      input.addEventListener("change", () => {
        if (input.checked) {
          input.setCustomValidity("");
          const feedback = form.querySelector(".rating-feedback");
          if (feedback) feedback.classList.remove("d-block");
        }
      });
    });

    form.addEventListener(
      "submit",
      (event) => {
        let ratingValid = true;
        if (ratingInputs.length) {
          ratingValid = Array.from(ratingInputs).some((input) => input.checked);
          const firstRating = ratingInputs[0];
          if (!ratingValid) {
            firstRating.setCustomValidity(
              "Please select a rating before submitting.",
            );
          } else {
            firstRating.setCustomValidity("");
          }
        }

        if (!form.checkValidity() || !ratingValid) {
          event.preventDefault();
          event.stopPropagation();
          const feedback = form.querySelector(".rating-feedback");
          if (feedback && !ratingValid) {
            feedback.classList.add("d-block");
          }
        }

        form.classList.add("was-validated");
      },
      false,
    );
  });
})();
