export function Table({
  headers,
  rows,
}: {
  headers: string[]
  rows: string[][]
}) {
  return (
    <div className='overflow-hidden rounded-lg border border-border'>
      <table className='w-full border-collapse text-sm'>
        <thead className='bg-panel'>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className='px-4 py-3 text-left font-medium text-muted border-b border-border'
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className='odd:bg-background'>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className='px-4 py-3 border-b border-border'
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
