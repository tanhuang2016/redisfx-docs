# Development

This project uses Maven for building, which is very simple. With the required environment set up, you can import and run it directly.

## Development Environment

The environment is also simple, just JDK21 + corresponding Maven version.

## Project Structure

```text
RedisDesktopManagerFX
├─rdm-common Common module, defines general tools, thread pools, etc.
├─rdm-redis Redis service module, constrains interfaces needed by UI
├─rdm-redis-imp Redis service implementation module, implements specific client interfaces
└─rdm-ui The entire tool's GUI module
  └─src
   ├─main
   │  ├─java
   │  │  └─xyz
   │  │   └─hashdog
   │  │     ─rdm
   │  │      └─ui 
   │  │       ├─common Common encapsulation
   │  │       ├─controller View control layer
   │  │       ├─entity Entity beans
   │  │       ├─exceptions UI exceptions
   │  │       ├─handler Encapsulated handlers
   │  │       └─util UI-related tools
   │  └─resources 
   │     ├─css UI-related stylesheets
   │     ├─fxml FXML files corresponding to views
   │     ├─i18n Internationalization
   │     ├─svg  Icons
   │     └─icon Icons
```

## Running

After importing the project and loading all Maven dependencies, you can directly run the main method in redisfx.tanh.rdm.ui.RedisFX.