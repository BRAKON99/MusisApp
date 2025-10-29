import { DivComponent } from "../../common/div-component";
import './search.css';

export class Search extends DivComponent {
    constructor(state) {
        super();
        this.state = state;
    }

    render() {
        this.el.classList.add('search');
        this.el.innerHTML = ` 
            <div class="search__wrapper">
                <input type="text" 
                    placeholder="Найти песню или исполнителя..."
                    class="search__input"
                    value="${this.state.searchQuery ? this.searchQuery : ''}"
                />
                <img src="/static/search.svg" alt="Поиск" />
            </div>
            <button aria-label="Искать">
                <img src="/static/input-search.svg" alt="Поиск" />
            </button>
        `
        return this.el
    }
}