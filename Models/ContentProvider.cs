using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Xml;
using System.Xml.Serialization;

namespace Voodoo.Models
{
    public class ContentProvider
    {
        public VideoCollection GetVideos()
        {
            VideoCollection videos = null;
            string path = HttpContext.Current.ApplicationInstance.Server.MapPath("~/Data/") + "videos.xml";

            XmlSerializer serializer = new XmlSerializer(typeof(VideoCollection));

            using (StreamReader reader = new StreamReader(path))
            {
                videos = (VideoCollection)serializer.Deserialize(reader);
                reader.Close();
            }
            return videos;
        }

        public PhotoCollection GetPhotos()
        {
            PhotoCollection photos = null;
            string path = HttpContext.Current.ApplicationInstance.Server.MapPath("~/Data/") + "photos.xml";

            XmlSerializer serializer = new XmlSerializer(typeof(PhotoCollection));

            using (StreamReader reader = new StreamReader(path))
            {
                photos = (PhotoCollection)serializer.Deserialize(reader);
                reader.Close();
            }
            return photos;
        }


    }
}