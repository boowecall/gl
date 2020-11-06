methods: {
    callApi() {
      fetch("//boowecall.github.io/gl/PWA//api/ping", {
        // NEW - add a Content-Type header
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(async response => {
          if (response.ok) {
            this.apiError = false;
            this.result = await response.json();
          } else {
            this.apiError = true;
          }
        })
        .catch(() => (this.apiError = true));
    }
  }
