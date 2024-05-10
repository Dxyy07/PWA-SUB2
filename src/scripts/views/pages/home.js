
const Home = {
    async render() {
        return `
            <main id="mainContent">
                <div class="hero">
                <div class="inner">
                    <h2>
                    "Laparnya Anda Rejeki untuk Kami"
                    </h2>
                    <p>
                    Yomakan Menyediakan berbagai tempat Makan dan minum di seluruh penjuru negeri. 
                    Penasaran? Yuk langsung Explore sekarang !!
                    </p>
            
                    <button tabindex="0" id="tombol" class="explore-now">Explore Now!</button>
                </div>
                </div>
        
                <div id="content"></div>
                <div class="explore">
                <h3>List Resto</h3>
                </div>
                <div id="restaurants">
                </div>
            </main>
        `;
    },

    async afterRender() {
        try {
            const fetchData = async () => {
                try {
                    const response = await fetch('https://restaurant-api.dicoding.dev/list');
                    const data = await response.json();
                    return data;
                } catch (error) {
                    console.error('Error:', error);
                    throw error;
                }
            };

            const data = await fetchData();
            let restaurantsContainer = document.getElementById('restaurants');

            data.restaurants.forEach(restaurant => {
                let restaurantItem = document.createElement('div');
                restaurantItem.classList.add('container');
                restaurantItem.innerHTML = `  
                    <div class="card" tabindex="0">
                        <img src="https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}" alt="${restaurant.name}">
                        <div class="card-content">
                            <h2>${restaurant.name}</h2>
                            <p>Rating: ${restaurant.rating}</p>
                            <p>Lokasi: ${restaurant.city}</p>
                            <a href="/#/detail/${restaurant.id}">Cek detail restoran ini</a>
                        </div>
                    </div>
                `;
                restaurantsContainer.appendChild(restaurantItem);
            });

        } catch (error) {
            console.error('Error:', error);
        }
    }
};

export default Home;
