import { LitElement, html, css } from 'lit';

export class ConsoleOverviewTemplate extends LitElement {
  static styles = css`
  :host {
    font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
  }
  .container {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  section.header {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .header__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__bottom {
    display: flex;
    justify-content: space-between;
    align-items: end;
    .search-container {
      width: 26.4%;
    }
  }
   `;

  static properties = {
    name: {},
    count: { type: Number },
  };

  constructor() {
    super();
    this.name = 'Somebody';
    this.count = 0;
  }

  render() {
    return html`
    <div class="container">
      <div class="header">
        <div class="header__top">
          <h1 class="title">
            <slot name="title"></slot>
          </h1>
          <div class="action-button">
            <slot name="action-button"></slot>
          </div>
        </div>
        <div class="header__bottom">
          <div class="search-container">
          <slot name="search"></slot>
          </div>
          <div class="filter-button">
            <slot name="filter-button"></slot>
          </div>
        </div>
      </div>
      <div class="body">
        <slot name="body"></slot>
      </div>
    </div>
  `
  }
}

customElements.define('console-overview-template', ConsoleOverviewTemplate);
