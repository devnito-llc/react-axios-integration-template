// Services
import {
  editBankDetails,
  getBankDetails,
  getRefreshToken,
  getUserDetails,
  loginUser,
} from "./services"

// Css
import "./index.css"

function App() {
  const handleLogin = async () => {
    console.log("LOGGING IN...")
    const resp = await loginUser({
      phone: "+923161415511",
      password: "123456",
    })
    console.log("RESPONSE : ", resp?.data)
  }

  const handleGetUserDetails = async () => {
    console.log("Getting User Details...")

    const resp = await getUserDetails()
    console.log("RESPONSE : ", resp)
  }

  const handleGetBankDetails = async () => {
    console.log("Getting Bank Details...")

    const resp = await getBankDetails()
    console.log("RESPONSE : ", resp)
  }

  const handleGetRefreshToken = async () => {
    console.log("Setting Refresh Token...")

    const resp = await getRefreshToken()
    console.log("RESPONSE : ", resp)
  }

  const handleEditBankDetails = async () => {
    console.log("Updating Bank Details IN...")
    const resp = await editBankDetails("65451c6612a5a7315119c4ba", {
      bankName: "Habib Bank",
      payee: "QASDFGtrdEWRT4567",
      accountNumber: "34567",
    })
    console.log("RESPONSE : ", resp?.data)
  }

  return (
    <div>
      TEST APIS
      <p>(check console for output)</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGetUserDetails}>Get User Details</button>
      <button onClick={handleGetBankDetails}>Get Bank Details</button>
      <button onClick={handleGetRefreshToken}>Get Refresh Token</button>
      <button onClick={handleEditBankDetails}>Edit Bank Details</button>
    </div>
  )
}

export default App
