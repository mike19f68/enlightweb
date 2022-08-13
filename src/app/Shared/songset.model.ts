export class LocalRow {
  SR_Type: string;
  SR_Title: string;
  SR_FirstLine: string;
  SR_PaceGrp: number;
  SR_Ref: number;
  SR_MusicalKey: string;
}

export interface SongSet {
  id: string;
  Leader: string;
  SetDate: string;
  SetRows: LocalRow [];
}