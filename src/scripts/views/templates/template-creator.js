import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
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

const createRestaurantDetailTemplate = (restaurants) => `
    <h2 class="movie__title">${restaurants.name}</h2>
    <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" />
    <div class="movie__info">
        <h3>Information</h3>
        <h4>Address</h4>
        <p>${restaurants.address}</p>
        <h4>City</h4>
        <p>${restaurants.city}</p>
        <h4>Rating</h4>
        <p>${restaurants.rating}</p>
    </div>
    <div class="movie__overview">
        <h3>Overview</h3>
        <p>${restaurants.description}</p>
    </div>
`;

const createLikeButton = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButton = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate,
    createLikeButton,
    createLikedButton,
};