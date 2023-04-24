import axios from '@/utils/http' 
import COS from 'cos-js-sdk-v5'


const uploadToken = () => {
  return axios.get('/getCOSToken', {})
}

const uploadFile = async (name: any, file: any, uploadFolder: any, progress?:any) => {
  const token: any = await uploadToken()
  const cos = new COS({
    SecretId: token.AccessKeyId,
    SecretKey: token.AccessKeySecret
  })

  return new Promise((resolve, reject) => {
    cos.uploadFile({
      Bucket: token.Bucket,
      Region: token.Region,
      Key: `${uploadFolder}/${name}`,
      Body: file,
      StorageClass: 'STANDARD',
    }, (err: any, res: any) => {
      if (err) {
        reject({ code: 500, msg: err })
      } else {
        resolve({ code: 200, msg: res })
      }
    })
  })
}


export { uploadToken, uploadFile }
