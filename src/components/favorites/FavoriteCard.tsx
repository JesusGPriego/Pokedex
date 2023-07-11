import React, { FC } from 'react';
import { Grid, Card } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface Props {
  id: number;
}

export const FavoriteCard: FC<Props> = ({ id }) => {
  const router = useRouter();

  const onPress = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card
        isHoverable
        isPressable
        css={{
          padding: 10,
        }}
        onPress={onPress}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt='favorite pokemon'
            height={200}
            width={200}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </div>
      </Card>
    </Grid>
  );
};
