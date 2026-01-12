## 604-geopy

* **功能**：提供地理编码（将地址转换为经纬度）和逆地理编码（将经纬度转换为地址）功能，支持多种地理服务提供商（如 Google、OpenStreetMap 等）。

* **PyPI**：<https://pypi.org/project/geopy/>

* **GitHub**：<https://github.com/geopy/geopy>

* **推荐使用**：推荐，地理位置处理常用。

```text
from geopy.geocoders import Nominatim
geolocator = Nominatim(user_agent="my-app")
location = geolocator.geocode("Beijing, China")
print((location.latitude, location.longitude))
```

​
