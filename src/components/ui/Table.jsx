/**
 * Table — data table (copied from @kol/table in kol-sandbox).
 * See src/styles/table.css for the token contract.
 */
const Table = ({ caption, columns, rows, className = '' }) => (
  <div className={`kol-table-wrapper ${className}`.trim()}>
    <table className="kol-table">
      {caption ? <caption className="sr-only">{caption}</caption> : null}
      <thead className="kol-table-thead">
        <tr>
          {columns.map((column) => (
            <th
              key={column.accessor}
              scope="col"
              className={column.headerClassName ?? 'kol-table-cell-title'}
              style={column.style}
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={row.id ?? row.token ?? rowIndex} className="kol-table-row">
            {columns.map((column) => (
              <td key={column.accessor} className={column.className ?? 'kol-table-cell-text'} style={column.style}>
                {column.render ? column.render(row) : row[column.accessor] ?? '—'}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default Table
