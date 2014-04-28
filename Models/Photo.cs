using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Serialization;

namespace Voodoo.Models
{
    [XmlType("photo")]
    public class Photo
    {
        [XmlAttribute("thumb")]
        public string Thumb { get; set; }

        [XmlAttribute("file")]
        public string File { get; set; }

        [XmlText]
        public string Text { get; set; }

    }
}