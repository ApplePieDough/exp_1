const reviewsContainer = document.getElementById('reviews');

		function displayReviews() {
			reviewsContainer.innerHTML = '';

			window.reviewData.forEach(review => {

				const card = document.createElement('div');
				card.classList.add('card');

				const title = document.createElement('h2');
				title.textContent = review.name;
				card.appendChild(title);

				const rating = document.createElement('div');
				rating.classList.add('rating');
				const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
				rating.textContent = stars;
				card.appendChild(rating);

				const date = document.createElement('div');
				date.classList.add('date');
				date.textContent = new Date(review.date).toLocaleDateString();
				card.appendChild(date);

				const content = document.createElement('p');
				content.textContent = review.review;
				card.appendChild(content);

				reviewsContainer.appendChild(card);
			});
		}
		displayReviews(); 
