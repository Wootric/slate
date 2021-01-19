# Exports

## Create an export

```shell
curl -i -s -X POST -H "Authorization: Bearer myaccesstoken" "https://cxi-api.wootric.com/v1/exports"
```

> The above command returns and empty response with status 201 Created.

This endpoint creates an export that will send an email to the user that requested the export once the export is ready.

In the email you'll see a link to download a CSV file containing the data that you requested. If you've chosen `responses` as the `export_type` you'll get a link to a CSV file containing your responses and associated data, if you've chosen `users` as the `export_type` you'll get data associated with your users in the CSV file.

### HTTP Request

`POST https://cxi-api.wootric.com/v1/exports`

### URL Parameters

Parameter | Type | Default | Description
--------- | ---- | ------- | ----
export_type | string | responses | The type of export, either `responses` or `users`

### Limits

Your can only have a single export in progress at the same time, so if you requested an export and want another one, you need to wait until you get the first export before requesting the new one.
