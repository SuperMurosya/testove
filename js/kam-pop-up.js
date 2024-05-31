
class KamPopUp {
	_iconButton = null;
	_closeButton = '_close';
	_classWrapperEl = null;
	_classContentEl = null;
	_popupOPen = "_popup-open";


	constructor(iconButton, classWrapperEl, classContentEl, closeButton) {

		if (typeof iconButton == 'string') {
			this._iconButton = iconButton;
		}

		if (typeof closeButton == 'string') {
			this._closeButton = closeButton;
		}

		if (typeof classWrapperEl == 'string') {
			this._classWrapperEl = classWrapperEl;
		}

		if (typeof classContentEl == 'string') {
			this._classContentEl = classContentEl;
		}
		this.popUp();


	}

	_blockScroll(i) {
		let html = document.getElementsByTagName("html")[0];
		if (i == true) {
			html.classList.add('_scroll-block');
		} else {
			html.classList.remove('_scroll-block');
		}



	}

	popUp() {

		let classWrapperEl = document.getElementsByClassName(this._classWrapperEl)[0];
		let openClass = this._popupOPen;


		if (classWrapperEl != null) {

			let closeButton = classWrapperEl.getElementsByClassName(this._closeButton)[0];
			if (closeButton != null) {

				closeButton.addEventListener('click', () => {
					classWrapperEl.classList.remove(openClass);
					this._blockScroll(false);
				});
			}

			let closeButton2 = classWrapperEl.getElementsByClassName('popup-1__close-button')[0];
			if (closeButton != null) {

				closeButton2.addEventListener('click', () => {
					classWrapperEl.classList.remove(openClass);
					this._blockScroll(false);
				});
			}


			if (classWrapperEl != null) {
				classWrapperEl.addEventListener('click', (e) => {
					if (!e.target.closest('.' + this._classContentEl)) {
						classWrapperEl.classList.remove(openClass);
						this._blockScroll(false);
					}
				});
			}
		}


		if (this._iconButton && classWrapperEl != null) {

			let icon = document.getElementsByClassName(this._iconButton);

			if (icon != null) {
				for (let i = 0; i < icon.length; i++) {
					icon[i].addEventListener('click', () => {
						classWrapperEl.classList.add(openClass);
						this._blockScroll(true);
					});

				}
			}
		}
	}

}




const firstPopup = new KamPopUp('all-members__block-button', 'popup-1', 'popup-1__content', 'popup-1__close');

const firstPopup2 = new KamPopUp('member__block-button', 'popup-1', 'popup-1__content', 'popup-1__close');


// Обовязкові стилі для css
// ._scroll-block {
// 	position: fixed;
//     width: 100%;
//     overflow-y: scroll;
// }