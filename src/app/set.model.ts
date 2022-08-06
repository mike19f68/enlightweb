export class LocalSet {
  Leader: string;
  SetDate: string;
  SetRows: LocalRow[];
}

export class LocalRow {
  SRType: string;
  SRTitle: string;
  SRFirstLine: string;
  SRPaceGrp: number;
  SRRef: number;
  SRMusicalKey: string;
}

export interface Set {
  id: string;
  Leader: string;
  SetDate: string;
  SetRows: [{
    SR_Type: string;
    SR_Title: string;
    SR_FirstLine: string;
    SR_PaceGrp: number;
    SR_Ref: number;
    SR_MusicalKey: string;
  }];
}

// export interface SetRow {
//   SRType: string;
//   SRTitle: string;
//   SRFirstLine: string;
//   SRPaceGrp: number;
//   SRRef: number;
//   SRMusicalKey: string;
// }
