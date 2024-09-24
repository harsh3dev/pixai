export const downloadImage = async (imageUrl: string, fileName: string) => {
    try {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/${imageUrl}` );
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }
      const blob = await response.blob();
  
      const blobUrl = URL.createObjectURL(blob);
  
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;
  
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading the image:', error);
    }

  };