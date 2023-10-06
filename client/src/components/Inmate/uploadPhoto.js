import React from 'react';
import ImageUploader from 'react-images-upload';
import Swal from 'sweetalert2';
import axios from 'axios';
import{Button} from '@mui/material';

class UploadPhoto extends React.Component {

	constructor(props) {
		super(props);
		 this.state = { pictures: [] };
		 this.onDrop = this.onDrop.bind(this);
	}

	onDrop(picture) {
		this.setState({
            pictures: this.state.pictures.concat(picture),
        });
	}

  uploadImages=()=>{
    const { id } = this.props;
  console.log('id=>',id)
    let uploadPromises = this.state.pictures.map(image=>{
      let formData = new FormData();
      formData.append('file', image, image.name);

     return axios.post(`/api/v1/images/upload/${id}`,formData)     
      
    })
axios.all(uploadPromises)
.then(results=>{
console.log('server response:')
console.log(results)
Swal.fire({
title: 'uploaded',
text: ' successful!',
icon: 'success',
confirmButtonText: 'Ok'
})
//  this.props.history.push(`/showPromo/${this.state.id}`)



})
.catch(e=>{
console.log(e)
})
}


    render() {
        return (
          <>
                     <ImageUploader
				withIcon={true}
        withPreview={true}         

				buttonText='Choose images'       
				onChange={this.onDrop}
				imgExtension={['.jpg', '.gif', '.png', '.gif','.jpeg']}
				maxFileSize={5242880}
			/>
               <Button  onClick={this.uploadImages} color="primary">
                  UPLOAD
                </Button>     
          </>
 
      
        );
    }
}

export default UploadPhoto



// import React, { Fragment, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
 
// import { Typography, Grid, Button } from '@mui/material';
// import face from '../../assets/img/face-0.jpg';
// import axios from 'axios';
// import { Popup } from 'semantic-ui-react';
 
// import { IconButton } from '@mui/material';
 

// function Avatar({ clickBtn, step }) {
//   const { user } = useSelector((state) => state.auth);

//   const [isLoading, setIsLoading] = useState(false);
//   const [isActive, setIsActive] = useState(false);
//   const hiddenFileInput = React.useRef(null);
//   const [resume, setResume] = useState({});
//   const [url, setUrl] = useState({});
//   const [uploadedFile, setUploadedFile] = useState({});
//   const [preview, setPreview] = useState(false);
//   const [avatar, setAvatar] = useState(false);

//   // const dispatch = useDispatch();

//   const handleClick = (event) => {
//     hiddenFileInput.current.click();
//   };
//   const handleChange = (event) => {
//     const fileUploaded = event.target.files[0];
//     const url = URL.createObjectURL(fileUploaded);
//     setUrl(url);
//     setResume(fileUploaded);
//     console.log(fileUploaded.name);
//     console.log(fileUploaded);
//     console.log(resume);
//     setPreview(true);
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();
//     let myid='650597ab25282b3146ad76ad'
//     const formData = new FormData();
//     console.log(resume);
//     formData.append('images', resume);
//     console.log(formData);
//     setIsActive(true);
//     if (formData && resume) {
//       axios.post(`/api/v1/images/resume-images/${myid}`, formData).then(
//         (res) => {
//           alert('Submitted successfully!');
//           setAvatar(true);
//           setIsActive(true);
        
//         },   

//         (err) => {
//           // alert('An error occured! Try submitting the form again.', err);
//           if (err.response.status === 500) alert(err.response.data);
//         }
//       );
//       console.log(resume, formData);
//     } else {
//       alert('Please select a file!');
//     }
//   };

//   return (
//     <>
//       <div style={{ marginLeft: '90px' }}>
//         <Typography variant="h4">Profile Picture</Typography>         
       
//         <Grid xs={12} container style={{ marginRight: '20px' }}>
//           <Grid md={3}>
//             <IconButton onClick={handleClick}>
//               <Popup
//                 trigger={
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     class="icon icon-tabler icon-tabler-upload"
//                     width="45"
//                     height="45"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="#9e9e9e"
//                     fill="none"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   >
//                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                     <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
//                     <polyline points="7 9 12 4 17 9" />
//                     <line x1="12" y1="4" x2="12" y2="16" />
//                   </svg>
//                 }
//                 position="bottom center"
//               >
//                 Upload existing picture
//               </Popup>
//             </IconButton>
//           </Grid>

//           <label>
//             {preview ? (
//               <img src={url} width="80px" height="80px" alt="" />
//             ) : (
//               <img src={face} width="80px" height="80px" alt="" />
//             )}{' '}
//             <div style={{ color: 'gray' }}>
//               <p>{resume.name ? resume.name : 'jpg,jpeg,png'}</p>
//             </div>
//           </label>

//           <label>
//             <input
//               type="file"
//               name="images"
//               accept=".jpg,.png,.jpeg"
//               ref={hiddenFileInput}
//               onChange={handleChange}
//               style={{ display: 'none' }}
//             />
//           </label>
//         </Grid>
//         <br />
//         <br />
//       </div>
//       <Button
//         type="submit"
//         fullWidth
//         variant="contained"
//         size="large"
//         color="secondary"
//         disabled={isLoading}
//         onClick={onSubmit}
//       >
//         Submit
     
//       </Button>
//     </>
//   );
// }
// export default Avatar;

 