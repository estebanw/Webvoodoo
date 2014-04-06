using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Voodoo.Models
{
    public class Sections : List<Section>
    {
        public Sections()
        {
            this.Add(new Section { Name = "Home", InContainer = false });
            this.Add(new Section { Name = "Trabajos", Color = "#fff" });
            this.Add(new Section { Name = "Servicios", Color = "#e5e5e5" });
            this.Add(new Section { Name = "Espacio", Color = "#333333" });
            this.Add(new Section { Name = "Nosotros", Color = "#f2f2f2" });
            this.Add(new Section { Name = "Clientes", Color = "#00B4DA" });
            this.Add(new Section { Name = "Contacto", Color = "#383838" });
            this.Add(new Section { Name = "Mapa", InContainer = false, ShowInToolbar = false });
        }
    }

    public class Section
    {
        public string Name { get; set; }
        public bool InContainer { get; set; }
        public string Color { get; set; }
        public bool ShowInToolbar { get; set; }

        public Section()
        {
            this.InContainer = true;
            this.ShowInToolbar = true;
        }
    }
}