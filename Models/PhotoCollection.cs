using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Serialization;

namespace Voodoo.Models
{
    [XmlRoot("photos")]
    public class PhotoCollection : List<Photo>
    {
    }
}
