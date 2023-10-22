import { Table, Header, HeaderRow, Body, Row, Cell, HeaderCell } from "@table-library/react-table-library/table";
import { useTheme } from "@table-library/react-table-library/theme";
import { useSort, HeaderCellSort } from "@table-library/react-table-library/sort";
import { useRowSelect, SelectTypes, CellSelect, HeaderCellSelect } from "@table-library/react-table-library/select";
import EmptyState from "../EmptyState";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";
import getTheme from "./theme";

const TableView = ({ className = "", nodes = [], sorting = false, loading, headers = [], onSelect = () => {}, enableSelect }) => {
	const data = { nodes };

	//Loading the theme
	const theme = useTheme(
		getTheme({
			Table: `--data-table-library_grid-template-columns: ${enableSelect ? "50px" : ""} ${headers.map((header) => header.width || "auto").join(" ")}`,
		})
	);
	//Define the width of the table columns

	//Selecting the rows
	const select = useRowSelect(
		data,
		{
			onChange: onSelect,
		},
		{
			rowSelect: SelectTypes.MultiSelect,
			buttonSelect: SelectTypes.MultiSelect,
		}
	);

	//Sorting the rows
	const sort = useSort(
		data,
		{},
		{
			sortFns: {
				...headers.map((header) => (header.sort ? { [header.key]: header.sort } : {})),
			},
			sortIcon: {
				margin: "4px",
				iconDefault: <FaSort className="text-muted" />,
				iconUp: <FaSortUp />,
				iconDown: <FaSortDown />,
			},
		}
	);

	if (loading) {
		return (
			<div className={`p-4 ${className}`}>
				<div role="status" className={`mb-4 min-h-[2rem] rounded-lg animate-pulse bg-gray-100`} />
				{new Array(3).fill(0).map((_, i) => (
					<div key={i} role="status" className={`mt-4 min-h-[1rem] rounded-lg animate-pulse bg-gray-100`} style={{ maxWidth: `${(10 - i) * 10}%` }} />
				))}
			</div>
		);
	}

	return (
		<Table className={`${className}`} data={data} theme={theme} layout={{ custom: true, horizontalScroll: true, fixedHeader: true }} sort={sort} select={enableSelect && select}>
			{(tableList) => (
				<>
					<Header>
						<HeaderRow>
							{enableSelect && <HeaderCellSelect className="accent-primary" />}
							{headers.map((header) =>
								sorting ? (
									<HeaderCellSort resize key={header.key} sortKey={header.key}>
										{header.label}
									</HeaderCellSort>
								) : (
									<HeaderCell resize key={header.key}>
										{header.label}
									</HeaderCell>
								)
							)}
						</HeaderRow>
					</Header>
					{nodes.length > 0 ? (
						<Body>
							{tableList.map((item) => (
								<Row key={item.id} item={item}>
									{enableSelect && <CellSelect className="accent-primary" item={item} />}
									{Object.keys(item).map((key, index) => (
										<Cell key={index}>{item[key]}</Cell>
									))}
								</Row>
							))}
						</Body>
					) : (
						<EmptyState />
					)}
				</>
			)}
		</Table>
	);
};

export default TableView;
