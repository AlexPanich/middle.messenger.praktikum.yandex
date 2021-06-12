enum METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

type Body = { [key: string]: any } | FormData | string;

type Options = {
  method?: METHOD;
  data?: Body;
  timeout?: number;
  headers?: { [key: string]: string };
};

type OptionsWithoutMethod = Omit<Options, "method">;
type OptionsWithoutTimeout = Omit<Options, "timeout">;

type FetchMethod = (
  url: string,
  options: OptionsWithoutMethod
) => Promise<XMLHttpRequest>;

interface Fetch {
  get: FetchMethod;
  post: FetchMethod;
  put: FetchMethod;
  delete: FetchMethod;
  request: (
    url: string,
    options: OptionsWithoutTimeout,
    timeout?: number
  ) => Promise<XMLHttpRequest>;
}

function queryStringify(data: { [key: string]: any } | FormData) {
  if (data instanceof FormData) {
    let params: string[] = [];
    for (const [key, value] of data.entries()) {
      params.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`
      );
    }
    return params.join("&");
  }
  return Object.entries(data)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
}

export class HTTPTransport implements Fetch {
  get = (url: string, options: OptionsWithoutMethod = {}) => {
    return this.request(
      url,
      { ...options, method: METHOD.GET },
      options.timeout
    );
  };

  put = (
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> => {
    return this.request(
      url,
      { ...options, method: METHOD.PUT },
      options.timeout
    );
  };

  post = (
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> => {
    return this.request(
      url,
      { ...options, method: METHOD.POST },
      options.timeout
    );
  };

  delete = (
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> => {
    return this.request(
      url,
      { ...options, method: METHOD.DELETE },
      options.timeout
    );
  };

  request = (url: string, options: Options, timeout: number = 5000) => {
    const { method = METHOD.GET, data, headers } = options;

    return new Promise<XMLHttpRequest>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      if (method === METHOD.GET && data) {
        if (typeof data === "string") {
          url = `${url}?${data}`;
        } else {
          url = `${url}?${queryStringify(data)}`;
        }
      }
      xhr.open(method, url);

      if (headers) {
        Object.entries(headers).forEach(([header, value]) => {
          xhr.setRequestHeader(header, value);
        });
      }

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;
      xhr.timeout = timeout;

      if (!data || method === METHOD.GET) {
        xhr.send();
      } else if (data instanceof FormData) {
        xhr.send(data);
      } else {
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
