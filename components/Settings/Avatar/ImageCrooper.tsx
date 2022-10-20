import { Avatar, Box, Button, Slider } from '@material-ui/core';
import { Close } from '@mui/icons-material';
import { Alert, Collapse, IconButton, Snackbar, Stack } from '@mui/material';
import axios from 'axios';
import { btoa } from 'buffer';
import Document from 'next/document';
import React, { useEffect, useRef, useState } from 'react'
import AvatarEditor from 'react-avatar-editor';
import { BorderRadius, UploadNew } from './Fields';



const ImageCrooper: React.FC = () => {
    const [state, setState] = useState(null)
    const [open, setOpen] = useState(false)
    const [answer, setAnswer] = useState(null)
    var editor = "";
    const [picture, setPicture] = useState({
      cropperOpen: false,
      img: null,
      zoom: 2,
      croppedImg:
        "https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png"
    });
  
    console.log(picture)

    const handleSlider = (e, value) => {
      setPicture({
        ...picture,
        zoom: value
      });
    };
  
    const handleCancel = () => {
      setPicture({
        ...picture,
        cropperOpen: false
      });
    };
  
    const setEditorRef = (ed) => {
      editor = ed;
    };
  
    const handleSave = (e) => {
      if (setEditorRef) {
        const canvasScaled = editor.getImageScaledToCanvas();
        const croppedImg = canvasScaled.toDataURL();
        
        setPicture({
          ...picture,
          img: null,
          cropperOpen: false,
          croppedImg: croppedImg
        });
      }
    };
  
    const handleFileChange = (e) => {
        let formData = new FormData()
        
        let url = URL.createObjectURL(e.target.files[0]);
        setPicture({
          ...picture,
          img: url,
          cropperOpen: true
        });
        setState(e.target.files[0])
      };

    const sendData = (e) => {
      const formData = new FormData();
    
      e.preventDefault();
      try {
        if(state) {
          formData.append("image", state)
          console.log(formData)
          axios.post('http://localhost:4200/files', formData)
          .then(response => {
            setOpen(true)
            setAnswer(response.data)
            
          })
          formData.delete("image")
        }  
      } catch (error) {
        
      }
      
    }


    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };


    const action = (
      <React.Fragment>
         <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <Close fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
  

    return (
        <div>
      <Box>
        <Box>
          <Avatar
            src={picture.croppedImg}
            style={{width: '200px', height: "auto", padding: "5" }}
          />
        <form onSubmit={sendData}>
          
                <label htmlFor="upload-photo">
                  <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    onChange={handleFileChange}
                  />

                  <Button color="primary" style={{
                    marginTop: '50px'
                  }} variant="contained" component="span">
                    Upload button
                  </Button>
                </label>
                <input type='submit' value='save' />
          </form>

        </Box>

        {picture.cropperOpen && (
          <Box display="block">
            <AvatarEditor
              ref={setEditorRef}
              image={picture.img}
              width={200}
              height={200}
              border={50}
              color={[255, 255, 255, 0.6]} // RGBA
              rotate={0}
              scale={picture.zoom}
            />
            <Slider
              aria-label="raceSlider"
              value={picture.zoom}
              min={1}
              max={10}
              step={0.1}
              onChange={handleSlider}
            ></Slider>
            <Box>
              <Button variant="contained" onClick={handleCancel}>
                Cancel
              </Button>
              <Button onClick={handleSave}>Save</Button>
            </Box>
          </Box>
        )}
      </Box>
      <Snackbar
        open={open}
        anchorOrigin={{
          horizontal: "left",
          vertical: "bottom",
        }}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
      >
        <Alert onClose={handleClose} severity="success">{answer?.message}</Alert>
      </Snackbar>
        
      
    </div>
    )
}

export default ImageCrooper