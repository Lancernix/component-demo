import { Table, TableProps } from '@mantine/core';
import { ProTableHead, ProTableRow } from './types'


interface ProTableProps extends TableProps {
  tHeads: ProTableHead[];
  tRows: ProTableRow[];
}


const ProTable = (props: ProTableProps) => {
  return (
    <Table>
      <thead>
        <tr>
          {props.tHeads.map((head) => (
            <th key={head.key}>{head.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>{props.tRows.map((row) => {
        })}</tr>
      </tbody>
    </Table>
  );
}