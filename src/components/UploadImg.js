import React, { Component } from 'react';

class UploadImg extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFile: '',
            images: [],
        };

    }
    handleselectedFile = event => {
        // this.setState({selectedFile: URL.createObjectURL(event.target.files[0])});
        // this.setState({
        //     selectedFile: event.target.files[0]
        // })
        console.log('check', event.target.files);
        let images = []
        for (var i = 0; i < event.target.files.length; i++) {
            images[i] = event.target.files[i];
        }
        images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/))
        console.log("list image:::", images)
        this.setState({ images })
    }

    upload() {


        const data = new FormData();
        data.append('file', this.state.images[0], this.state.images[0].name);
        // console.log(data);
        this.props.uploadImg(data);

    }
    resetInput() {
        this.input.value = ''
        this.setState({
            images: []
        })

    }

    uploadMultipleImages() {
        for (let i = 0; i < this.state.images.length; i++) {
            // console.log(i);
            let data = new FormData();
            data.append("file", this.state.images[i], this.state.images[i].name);
            // formData.append(name, value, filename);
            this.props.uploadImg(data);

        }
    }

    render() {
        let listImage


        listImage = this.state.images.map((img, key) => {
            return (
                <img alt="" key={key} width={200} height={200} src={URL.createObjectURL(img)} />
                // URL.createObjectURL(img) tạo tham chiếu đến file
            )
        })
        // console.log("list",listImage);

        return (
            <div>
                <input ref={ref => this.input = ref}
                    type="file" name="" id="" onChange={this.handleselectedFile} multiple />
                <button onClick={() => { this.uploadMultipleImages(); this.resetInput() }}>Upload</button>
                {/* <img alt="leu leu" width={200} height={200} src={this.state.selectedFile} /> */}
                <div style={{ float: "left" }}>{listImage}</div>
            </div>
        );
    }
}

export default UploadImg;