using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Serialization;

namespace Voodoo.Models
{
    [XmlType("video")]
    public class Video
    {
        [XmlAttribute("imageFile")]
        public string ImageFile { get; set; }

        [XmlAttribute("vimeoLink")]
        public string VimeoLink { get; set; }

        [XmlText]
        public string Text { get; set; }

    }
}