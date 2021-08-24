$(document).ready(function() {
    const modal = $('.modal');
    const openModal = $('.floors__button');
    const closeModal = $('.modal__close');
    const floorImg = $('.main__image-svg path');
    const flatImg = $('.modal__image-floor-img path');
    const flatLink = $('.flats__link');
    const btnUp = $('.counter__btn-up');
    const btnDown = $('.counter__btn-down');

    let currentFloor = 2;
    let currentFlat = null;


    floorImg.on('click', function() {
        floorImg.removeClass('selected');
        $(this).addClass('selected');
        currentFloor = $(this).attr('data-floor');
        $('.current').text(currentFloor);
        modal.addClass('modal-opened');
    });

    flatImg.on('click', function() {
        flatImg.removeClass('selected');
        $(this).addClass('selected');
        currentFlat = $(this).attr('data-flat');
        flatLink.removeClass('flats__link-selected');
        $(`.flats__link[data-flat-item=${currentFlat}]`).addClass('flats__link-selected');
    });

    flatLink.on('click', function() {
        flatImg.removeClass('selected');
        flatLink.removeClass('flats__link-selected');
        currentFlat = $(this).attr('data-flat-item');
        $(`path[data-flat=${currentFlat}]`).addClass('selected');
    });

    btnUp.on('click', function() {
        if (+currentFloor < 18) {
            currentFloor++;
            floorImg.removeClass('selected');
            $(`path[data-floor="${toLocaleNumbers(currentFloor)}"]`).addClass('selected');
            $('.current').text(toLocaleNumbers(currentFloor));
        }
    });

    btnDown.on('click', function() {
        if (+currentFloor > 2) {
            currentFloor--;
            floorImg.removeClass('selected');
            $(`path[data-floor="${toLocaleNumbers(currentFloor)}"]`).addClass('selected');
            $('.current').text(toLocaleNumbers(currentFloor));
        }
    });

    openModal.on('click', () => modal.addClass('modal-opened'));
    closeModal.on('click', () => modal.removeClass('modal-opened'));

    function toLocaleNumbers(num) {
        return +num < 10 ? '0' + +num : num;
    }
});