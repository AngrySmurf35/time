there ins an issue in google maps react so change in node_modules\google-maps-react\dist\components\Marker.js

if (this.props.map !== prevProps.map || this.props.position !== prevProps.position) {
          this.marker.setMap(null);
           this.renderMarker();
        }

with

if (this.props.map !== prevProps.map || this.props.position !== prevProps.position) {
          if (this.marker) {
            this.marker.setMap(null);
          }
          this.renderMarker();
        }

