export class LocalRow {
  SR_Type: string;
  SR_Title: string;
  SR_FirstLine: string;
  SR_PaceGrp: number;
  SR_Ref: number;
  SR_MusicalKey: string;
}

export class SongSet {
  id: string;
  Leader: string;
  SetDate: string;
  SetRows: LocalRow [];
  // SetRows: [{
  //   SR_Type: string;
  //   SR_Title: string;
  //   SR_FirstLine: string;
  //   SR_PaceGrp: number;
  //   SR_Ref: number;
  //   SR_MusicalKey: string;
  // }];
}

// export interface SetRow {
//   SRType: string;
//   SRTitle: string;
//   SRFirstLine: string;
//   SRPaceGrp: number;
//   SRRef: number;
//   SRMusicalKey: string;
// }
