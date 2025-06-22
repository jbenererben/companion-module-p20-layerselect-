module.exports = function (self) {
  self.setActionDefinitions({
    set_active_screen: {
      name: 'Screen Seç',
      options: [
        {
          id: 'screenId',
          type: 'number',
          label: 'Screen ID',
          default: 1,
          min: 1,
        },
      ],
      callback: async (event) => {
        const screenId = event.options.screenId
        self.selectedScreenId = screenId

        const body = { id: screenId }

        try {
          await self.sendRequest({
            url: `https://127.0.0.1:19998/unico/v1/screen/select`,
            method: 'PUT',
            headers: {
              'Authorization': 'BURAYA_AUTH_TOKEN', // Geçici olarak sabit
              'Content-Type': 'application/json',
            },
            body: body,
          })

          self.log('info', `Screen ${screenId} seçildi`)
        } catch (err) {
          self.log('error', `Screen seçimi hatası: ${err.message}`)
        }
      },
    },
  })
}
