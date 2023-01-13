 
export interface ApiBlogItem {
  pageSize: number 
  current:number
  q:string
  date:string
}

export interface ApiBlogEdit {
  title: string
  centent: string
  class: string
  status: number
  uid: number
  senderName: string
}
 