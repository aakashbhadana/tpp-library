const getTheme = (theme = {}) => {
	return {
		BaseRow: `
        &.row-select-selected, &.row-select-single-selected {
          background-color: rgb(228, 239, 231) !important;
        }
      `,
		HeaderRow: `
        font-size: 0.8rem;
        .th {
          border-bottom: 1px solid #eaeaea;
        }
      `,
		Row: `
        font-size: 0.8rem;
        &:not(:last-of-type) .td {
          border-bottom: 1px solid #eaeaea;
        }
        &:hover {
          background-color: rgb(243 244 246);
          color: #111
        }
      `,
		BaseCell: `
        border-bottom: 1px solid transparent;
        border-right: 1px solid transparent;
        padding: 1rem;
        height: 3rem;
        &:last-of-type > div > div {
          display: flex;
          justify-content: flex-end;
        }
        &:last-of-type > div {
          display: flex;
          justify-content: flex-end;
        }
      `,
		...theme,
	};
};

export default getTheme;
