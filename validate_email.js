function validation() {
    const emailField = document.getElementById("email");
    const emailValue = emailField.value.trim();
  
    if (!emailValue.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      alert("Incorrect email format");
      return false;
    }
    return true;
  }
  
  window.reviewData = [
    {
      name: 'jason',
      date: '2022-03-01',
      rating: 5,
      review: 'You can see why its so popular. The perfect sport for human beings. comes instictively and forces the body to move in the way it was evolved to'
    },
    {
      name: 'Carlyle',
      date: '2022-02-15',
      rating: 3,
      review: 'seemingly harmless but when you get into it, things get dangerous quickly. fun to play though'
    },
    {
      name: 'Carman_KingOfTheCourt',
      date: '2022-01-10',
      rating: 5,
      review: 'closest to perfection humanity will ever reach. Playing Football is the only time I feel truly alive. low barrier of entry and incomprehnsebly high skill celing. truly the most beautiful game'
    },
    {
      name: 'Indra',
      date: '2021-12-01',
      rating: 0,
      review: 'Dont understand what all the noise is about. People have hands because people need hands. Just pick the ball up. Would make the game instantly better'
    },
    {
      name: 'David Chen',
      date: '2021-11-15',
      rating: 3,
      review: 'Higher level of play in football becomes more than just a physical contest. It becomes a game of chess. A true battle of the minds. Barring the foul system. that part is a disgrace'
      }
  ];

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
