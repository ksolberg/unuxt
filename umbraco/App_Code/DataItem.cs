using System.Collections.Generic;
using Umbraco.Core.Models;

public class DataItem
{
  public string url { get; set; }
  
  public string contentTypeAlias { get; set; }
  
  public List<Property> properties { get; set; }

  public DataItem(IPublishedContent content)
  {
    url = content.Url;
    
    contentTypeAlias = content.DocumentTypeAlias;
    
    properties = new List<Property>();
    
    properties.Add(new Property { alias = "foo", value = "Bar" });      
  }
}