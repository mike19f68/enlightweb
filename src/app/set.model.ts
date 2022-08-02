export class Set {
  id: string;
  Leader: string;
  SetName: string;
  SetRows: SetRow;
}

export class SetRow {
  SRType: string;
  SRTitle: string;
  SRFirstLine: string;
  SRPaceGrp: number;
  SRRef: number;
  SRMusicalKey: string;
}
