import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { SettingsContext } from "../../server/SettingsProvider";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Home.css";
import { Alert } from "@mui/material";
import ChangePassword from "../../components/ChangePassword";
const Profile = () => {
  const [pincodeError, setPincodeError] = useState("");
  const settings = useContext(SettingsContext);
  const [emailError, setEmailError] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [whatsappError, setWhatsappError] = useState("");
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        if (!authToken) {
          // Handle unauthenticated state
          return;
        }

        const response = await axios.get(
          "http://localhost:8000/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        const { name, mobile, email, whatsapp, address, pincode } =
          response.data;
        setName(name || ""); // Set default value as empty string if null
        setMobile(mobile || "");
        setEmail(email || "");
        setWhatsapp(whatsapp || "");
        setAddress(address || "");
        setPincode(pincode || "");
        setIsEdit(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();

    const profileData = {
      name,
      mobile,
      email,
      whatsapp,
      address,
      pincode,
    };

    axios
      .put("http://localhost:8000/api/user/profile", profileData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        setMessage(response.data.message);  // Use server's success message
        setMessageType('success');
        console.log(response);
        setTimeout(() => {
          setMessage('');
          setMessageType('');
        }, 3000);
      })
      
              .catch((error) => {
        if (error.response && error.response.data.errors) {
          const errors = error.response.data.errors;
          const errorMessages = Object.keys(errors).map((key) => `${key}: ${errors[key]}`);
          setMessage(errorMessages.join(', '));
        } else {
          setMessage('Failed to update profile');
        }
        setMessageType('error');
      
        setTimeout(() => {
          setMessage('');
          setMessageType('');
        }, 3000);
      });
      }


  if (!settings) {
    return <div>Loading...</div>;
  }
  const handleNameChange = (event) => {
    const inputValue = event.target.value;
    const isAlphabetic = /^[a-zA-Z\s]*$/.test(inputValue);
    if (isAlphabetic) {
      setName(inputValue);
    }
  };

  const handleMobileChange = (event) => {
    // Only accept numeric input
    const isNumeric = /^[0-9]*$/.test(event.target.value);
    if (isNumeric) {
      const inputMobile = event.target.value;
      if (inputMobile.length <= 10) {
        // allow up to 10 digits
        setMobileError("");
        setMobile(inputMobile);
      } else {
        setMobileError("Mobile number should not exceed 10 digits");
      }
    } else {
      setMobileError("Only numbers are allowed");
    }
  };

  return (
    <div>
  <Grid container spacing={2}> {/* Added spacing for consistent spacing between Grid items */}
    <Grid item xs={12} md={8}>
      {message && (
        <Alert severity={messageType === "success" ? "success" : "error"}>
          {message}
        </Alert>
      )}

      <Card sx={{ width: "100%", padding: '3.4rem', marginRight: '0.2rem' }}>
        <CardContent>
          <h2 className="text-center mb-4">Profile</h2> {/* Changed class to className */}
          <form onSubmit={submitForm} autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}> {/* Adjusted grid item widths for better alignment */}
                <TextField
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={handleNameChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Mobile"
                  variant="outlined"
                  value={mobile}
                  onChange={handleMobileChange}
                  fullWidth
                  required
                  error={mobileError !== ""}
                  helperText={mobileError}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(event) => {
                    const pattern = new RegExp(
                      "^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"
                    );
                    if (!pattern.test(event.target.value)) {
                      setEmailError("Please enter a valid email");
                    } else {
                      setEmailError("");
                    }
                    handleInputChange(event, setEmail);
                  }}
                  fullWidth
                  required
                  error={emailError !== ""}
                  helperText={emailError}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Whatsapp"
                  variant="outlined"
                  value={whatsapp}
                  onChange={(event) => {
                    const pattern = new RegExp("^\\d{10}$");
                    if (!pattern.test(event.target.value)) {
                      setWhatsappError(
                        "Whatsapp number should be exactly 10 digits"
                      );
                    } else {
                      setWhatsappError("");
                    }
                    handleInputChange(event, setWhatsapp);
                  }}
                  fullWidth
                  required
                  error={whatsappError !== ""}
                  helperText={whatsappError}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Address"
                  variant="outlined"
                  value={address}
                  onChange={(event) => handleInputChange(event, setAddress)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Pincode"
                  variant="outlined"
                  value={pincode}
                  onChange={(event) => {
                    const inputValue = event.target.value;
                    const isNumeric = /^[0-9]*$/.test(inputValue);
                    if (!isNumeric) {
                      // ignore input
                      return;
                    }
                    const pattern = new RegExp("^\\d{6}$");
                    if (!pattern.test(inputValue)) {
                      setPincodeError("Pincode should be exactly 6 digits");
                    } else {
                      setPincodeError("");
                    }
                    setPincode(inputValue);
                  }}
                  fullWidth
                  required
                  error={pincodeError !== ""}
                  helperText={pincodeError}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ width: '100%' }} // Adjusted button width to align with the grid
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>

    <Grid item xs={12} md={3} sx={{ paddingTop: '20px' }}>
      <ChangePassword />
    </Grid>
  </Grid>
</div>
  );
                }

export default Profile;
