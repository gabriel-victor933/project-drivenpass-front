import { TailSpin } from 'react-loader-spinner'

function Loading() {
  return (
    <TailSpin
        height="80"
        width="80"
        color="#005985"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
    />
  )
}

export default Loading