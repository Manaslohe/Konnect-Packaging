import React, { useState } from 'react';
import { Upload } from 'lucide-react';

function Analysis() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    message: ''
  });
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setUploadedFile(file);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    console.log('File uploaded:', uploadedFile);
    // Handle form submission here
  };

  return (
    <div className="w-full min-h-screen bg-white p-4  md:p-6 lg:p-8">
      <div className="max-w-7xl pt-8 mx-auto">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#E9C77F] to-[#FBE6B7] rounded-2xl  p-6 md:p-8 mb-8">
          <h1 className="font-['Krona_One',sans-serif] text-[#111] text-2xl md:text-3xl lg:text-4xl mb-4 leading-tight">
            Product Analysis
          </h1>
          <p className="font-['Montserrat',sans-serif] text-[#333] text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl">
            We evaluate every product's design, material, and functionality to ensure it meets quality and performance 
            standards. This helps us create packaging that's efficient, appealing, and aligned with market needs.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-['Krona_One',sans-serif] text-[#111] text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4">
              Have a product{' '}
              <span className=" text-7xl block pb-4">query?</span>
            </h2>
            <div className="flex flex-row items-end flex-wrap gap-2">
              <span className="font-['Krona_One',sans-serif] text-3xl md:text-4xl lg:text-5xl">
                Upload <br/>an image for
              </span>
              <span className="font-['Krona_One',sans-serif] text-4xl md:text-5xl lg:text-7xl text-[#111]">
                info
              </span>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#E5E5E5] rounded-lg border-none outline-none font-['Montserrat',sans-serif] text-[#666] placeholder-[#999]"
              />

              {/* Phone Input */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#E5E5E5] rounded-lg border-none outline-none font-['Montserrat',sans-serif] text-[#666] placeholder-[#999]"
              />

              {/* Email Input */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#E5E5E5] rounded-lg border-none outline-none font-['Montserrat',sans-serif] text-[#666] placeholder-[#999]"
              />

              {/* Country Input */}
              <input
                type="text"
                name="country"
                placeholder="Search country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#E5E5E5] rounded-lg border-none outline-none font-['Montserrat',sans-serif] text-[#666] placeholder-[#999]"
              />

              {/* Message Textarea */}
              <textarea
                name="message"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-[#E5E5E5] rounded-lg border-none outline-none font-['Montserrat',sans-serif] text-[#666] placeholder-[#999] resize-none"
              />

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#111] text-white px-6 py-3 rounded-lg font-['Montserrat',sans-serif] text-sm font-medium hover:bg-[#333] transition-colors"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>

            {/* File Upload Section */}
            <div className="mt-6">
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive 
                    ? 'border-[#F0D395] bg-[#F0D395]/10' 
                    : 'border-[#CCC] bg-[#F9F9F9]'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center space-y-3">
                  <Upload className="w-12 h-12 text-[#666]" />
                  <p className="font-['Montserrat',sans-serif] text-[#666] text-lg">
                    Drag & Drop here
                  </p>
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleFileSelect}
                    className="hidden"
                    accept="image/*"
                  />
                  <label
                    htmlFor="fileInput"
                    className="cursor-pointer text-[#666] hover:text-[#333] transition-colors"
                  >
                    or click to browse
                  </label>
                </div>
              </div>
              
              {/* File Name Display */}
              {uploadedFile && (
                <div className="mt-3 flex items-center justify-between bg-[#F0F0F0] p-3 rounded-lg">
                  <span className="font-['Montserrat',sans-serif] text-[#666] text-sm">
                    Image name: {uploadedFile.name}
                  </span>
                  <button
                    onClick={() => setUploadedFile(null)}
                    className="text-[#999] hover:text-[#666] transition-colors"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analysis;