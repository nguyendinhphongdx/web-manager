import { useState } from "react";
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getBase64 } from "../../helpers/uploadPreview";

export function AvatarPreview(){
    const [previewVisible,setPreviewVisible] =useState(()=>false);
    const [previewImage,setPreviewImage] =useState(()=>'');
    const [previewTitle,setPreviewTitle] =useState(()=>'');
    const handleCancel = () => {
        setPreviewVisible(false);
    }
    const handlePreview = async file => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview)
        setPreviewVisible(true)
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
      };
      const uploadButton = (
        <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      );
      return(
          <div className="">
              <Upload
                    listType="picture-card"
                    onPreview={handlePreview}
                    >
                        {uploadButton}
                    </Upload>
                    <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={handleCancel}
                    >
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
          </div>
      );
}